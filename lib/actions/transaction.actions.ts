"use server";

import { connectToDatabase } from "@/lib/data/mongoose";
import Transaction from "@/lib/data/models/transaction.model";
import { updateCredits } from "@/lib/actions/user.actions";
import { handleError } from "@/lib/utils";

export async function createTransaction(transaction: CreateTransactionParams) {
	try {
		await connectToDatabase();

		// create a new transaction with a buyerId
		const newTransaction = await Transaction.create({
			...transaction,
			buyer: transaction.buyerId,
		});

		await updateCredits(transaction.buyerId, transaction.credits);

		return JSON.parse(JSON.stringify(newTransaction));
	} catch (error) {
		handleError(error);
	}
}
