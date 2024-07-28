import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(filters).toString();
        return {
          url: `product?${params}`,
          method: "GET"
        };
      },
      providesTags: ['product'],
    }),

    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ['product'],
    }),

    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "/product",
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: ['product'],
    }),

    updateProduct: builder.mutation({
      query: ({ id, product }) => {
        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: product,
        };
      },
      invalidatesTags: ['product'],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
