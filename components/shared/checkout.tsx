"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { handleError } from "@/lib/utils";

export const Checkout = ({
	plan,
	amount,
	credits,
	buyerId,
}: {
	plan: string;
	amount: number;
	credits: number;
	buyerId: string;
}) => {
	const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;

	const paypalCreateOrder = async () => {
		try {
			const response = await fetch("api/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ amount }),
			});

			const order = await response.json();

			return order.id;
		} catch (error) {
			handleError(error);
		}
	};

	return (
		<section>
			<PayPalScriptProvider options={{ clientId: paypalClientId }}>
				<PayPalButtons
					style={{
						color: "blue",
						layout: "vertical",
						shape: "pill",
						tagline: false,
					}}
					createOrder={async () => {
						let orderId = await paypalCreateOrder();
						return orderId;
					}}
					onApprove={async (data, actions) => {
						console.log(data);
						actions.order?.capture();
					}}
					onCancel={async (data) => {}}
				/>
			</PayPalScriptProvider>
		</section>
	);
};
