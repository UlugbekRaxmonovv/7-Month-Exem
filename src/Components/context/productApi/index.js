import { api } from '../Api/index'
export const productApi = api.injectEndpoints({

  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Product"]
    }),

  //  singleroute
  
    getDetialProduct:build.query({
      query: (id) => ({ 
        url: `/products/${id}`, 
      }),
    }),
    // Post request
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Patch request
    updateProduct: build.mutation({
      query: ({_id, body})=> ({
        url: `/`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Delete request
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
     postSignIn: build.mutation({
      query: (body)=>({
          url: "/auth/login",
          method:"POST",
          body
      }),
      invalidatesTags: ["User"]
  })
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetDetialProductQuery,
  usePostSignInMutation
} = productApi