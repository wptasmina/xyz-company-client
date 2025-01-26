import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaBox, FaChevronDown,} from "react-icons/fa";
import { GoMultiSelect } from "react-icons/go";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function Add_Asset() {

   // post data using axios
   const axiosPublic = useAxiosPublic();

   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();
 
   // navigate user
   const navigate = useNavigate();
 
   //   submit form
   const onSubmit = async (data) => {
     const createdAt = new Date().toISOString();
     console.log(data, createdAt);
     // asset info
     const assetInfo = {
       product_name: data.product_name,
       product_type: data.product_type,
       product_quantity: Number(data.product_quantity),
       createdAt,
     };
     axiosPublic
       .post("/assets", assetInfo)
       .then((res) => {
         if (res.data.insertedId) {
           Swal.fire({
             title: "Asset Added SuccessFull!",
             text: "Asset Added",
             icon: "success",
           });
         }
       })
       .catch((error) => {
         console.log(error);
       });
     reset();
     navigate("/dashboard/asset-list");
   };
 
   return (
     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-lg mx-auto border rounded-2xl">
         {/* Form Card */}
         <div className="bg-[#d0d5faf1] rounded-2xl shadow-lg overflow-hidden">
           {/* Header */}
           <div className="bg-[#d0d5faee] px-8 py-6">
             <h2 className="text-2xl font-bold text-[#031278] text-center">
               Add New Asset
             </h2>
             <p className="text-gray-600 text-center mt-1">
               Enter the details of your new asset
             </p>
           </div>
 
           {/* Form Content */}
           <div className="px-8 py-6">
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               {/* Product Name */}
               <div className="space-y-1">
                 <label
                   htmlFor="productName"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Product Name
                 </label>
                 <div className="relative rounded-md shadow-sm">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <FaBox className="h-5 w-5 text-gray-400" />
                   </div>
                   <input
                     type="text"
                     id="productName"
                     {...register("product_name", {
                       required: "Product name is required",
                     })}
                     placeholder="Enter product name"
                     className="block w-full pl-10 pr-4 py-3 border-gray-300 rounded-md border focus:border-blue-500 duration-300 focus:outline-none outline-none "
                   />
                 </div>
                 {errors.product_name && (
                   <p className="text-sm text-red-600 mt-1">
                     {errors.product_name.message}
                   </p>
                 )}
               </div>
 
               {/* Product Type */}
               <div className="space-y-1">
                 <label
                   htmlFor="productType"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Product Type
                 </label>
                 <div className="relative rounded-md shadow-sm ">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <GoMultiSelect className="h-5 w-5 text-gray-700" />
                   </div>
                   <select
                     id="productType"
                     {...register("product_type", {
                       required: "Product type is required",
                     })}
                     className="block w-full pl-10 pr-10 py-3 rounded-md border focus:border-blue-500 duration-300 focus:outline-none outline-none appearance-none"
                   >
                     <option value="" disabled selected>
                       Select product type
                     </option>
                     <option value="Returnable">Returnable</option>
                     <option value="Non-Returnable">Non-Returnable</option>
                   </select>
                   <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                     <FaChevronDown className="h-4 w-4 text-gray-400" />
                   </div>
                 </div>
                 {errors.product_type && (
                   <p className="text-sm text-red-600 mt-1">
                     {errors.product_type.message}
                   </p>
                 )}
               </div>
 
               {/* Product Quantity */}
               <div className="space-y-1">
                 <label
                   htmlFor="productQuantity"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Product Quantity
                 </label>
                 <div className="relative rounded-md shadow-sm">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                     <span className="text-gray-400 font-medium">#</span>
                   </div>
                   <input
                     type="number"
                     id="productQuantity"
                     {...register("product_quantity", {
                       required: "Product quantity is required",
                       min: { value: 1, message: "Quantity must be at least 1" },
                     })}
                     placeholder="Enter quantity"
                     className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:border-blue-500 duration-300 focus:outline-none outline-none"
                   />
                 </div>
                 {errors.product_quantity && (
                   <p className="text-sm text-red-600 mt-1">
                     {errors.product_quantity.message}
                   </p>
                 )}
               </div>
 
               {/* Submit Button */}
               <div className="pt-4">
                 <button
                   type="submit"
                   className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#031278] focus:bg-blue-700 focus:outline-none focus:ring-2  shadow-lg hover:shadow-xl"
                 >
                   <IoMdAddCircleOutline className="mr-2 h-5 w-5" />
                   Add Asset
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   );
}
