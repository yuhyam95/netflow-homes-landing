"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid fields." };
  }

  const { name, email, subject, message } = validatedFields.data;

  // In a real application, you would handle this data, e.g., by:
  // 1. Sending an email notification to the company.
  // 2. Sending an auto-reply confirmation to the user.
  // 3. Saving the inquiry to a database.

  console.log("New Inquiry Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For this demo, we'll just return a success message.
  // The automatic email acknowledgement would be configured here.
  return { success: true };
}