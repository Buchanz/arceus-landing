"use client";

import { WaitlistConfirmation } from "../../emails/WaitlistConfirmation";

export default function EmailPreview() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Email Template Preview</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <WaitlistConfirmation />
        </div>
      </div>
    </div>
  );
}
