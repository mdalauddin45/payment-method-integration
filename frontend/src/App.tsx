import { IProduct, ProductCard } from "./components/Shared/ProductCard";
import Skeleton from "./components/Skeleton/Skeleton";
import { useGetProductsQuery } from "./redux/services/product/product";

function App() {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data || [];
  return (
    <div className="mx-auto">
      <div
        className="text-center py-40 space-y-10 bg-cover bg-center text-white bg-blend-darken bg-[url('https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] grayscale-[30%]"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // }}
      >
        <h1 className="text-9xl font-bold drop-shadow-lg shadow-black">
          <span className="text-lime-500">Shurjo</span> Pay
        </h1>
        <h3 className="text-6xl font-bold  drop-shadow-md">
          Payment Method Integration
        </h3>
      </div>

      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="mx-auto px-4 py-16">
          <h2 className="sr-only">Products</h2>
          <div className="columns-1 md:columns-2 gap-5 divide-x">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
