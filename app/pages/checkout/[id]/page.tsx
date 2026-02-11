import CheckoutPage from "@/components/checkoutlayout/CheckoutPage";

export default function Checkout({ params }: { params: { id: string } }) {
  return <CheckoutPage serviceId={params.id} />;
}

