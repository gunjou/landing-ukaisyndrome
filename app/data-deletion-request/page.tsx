"use client";

import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";

export default function DataDeletionRequestEN() {
  const adminEmail: string = "admin@ukaisyndrome.id";
  const appName: string = "Syndrome UKAI";
  const developerName: string = "Outlook-Project";
  const privacyPolicyLink: string = "/privacy-policy";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* NAV */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-custom-merah hover:text-red-700 transition flex items-center"
          >
            <span className="text-2xl">
              <MdOutlineKeyboardBackspace />
            </span>
            <span className="text-sm font-medium hidden sm:inline">Back</span>
          </Link>

          <Link
            href="/data-deletion-request-id"
            className="text-custom-merah hover:text-red-600 font-medium border-b border-custom-merah pb-0.5"
          >
            Lihat dalam Bahasa Indonesia
          </Link>
        </div>

        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-custom-merah sm:text-4xl">
            Account and Data Deletion Request
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Application <span className="font-semibold">{appName}</span>
          </p>
        </header>

        {/* CONTENT */}
        <section className="space-y-8">
          {/* STEP */}
          <div className="bg-custom-merah/30 border-l-4 border-custom-merah p-6 rounded-md">
            <h2 className="text-2xl font-bold text-custom-merah mb-4 flex items-center gap-2">
              <LuSparkles />
              Request Submission Steps
            </h2>

            <p className="text-black">
              We, <span className="font-semibold">{developerName}</span>,
              process account deletion requests via email. Please send your
              request to the contact address below to begin the process.
            </p>

            <div className="mt-4 p-4 bg-red-50 rounded-md text-center">
              <p className="text-lg font-semibold text-custom-merah">
                Email Address for Deletion Requests:
              </p>

              <a
                href={`mailto:${adminEmail}?subject=Account Deletion Request - ${appName}`}
                className="text-2xl font-extrabold text-custom-merah hover:text-red-800 transition"
              >
                {adminEmail}
              </a>
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Required Details in the Email
            </h2>

            <p className="text-gray-600 mb-4">
              To ensure your request is processed quickly and securely, you must
              include the following details in your email:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Email Subject:</strong>{" "}
                  <code className="bg-gray-200 text-red-600 px-2 py-1 rounded">
                    Account Deletion Request - {appName}
                  </code>
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Account Identification:</strong> Include email or
                  username
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-3 text-green-500">✔</span>
                <div>
                  <strong>Request Confirmation:</strong> Permanent deletion
                  request
                </div>
              </li>
            </ul>
          </div>

          {/* DATA */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Data Deleted and Retained
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>After verification:</p>

              <blockquote className="border-l-4 border-red-500 pl-4 italic bg-red-50 p-3 rounded-md">
                <strong className="text-red-700">Deleted:</strong> All user data
              </blockquote>

              <blockquote className="border-l-4 border-yellow-500 pl-4 italic bg-yellow-50 p-3 rounded-md">
                <strong className="text-yellow-700">Retained:</strong>{" "}
                anonymized data for compliance and analytics. See{" "}
                <Link
                  href={privacyPolicyLink}
                  className="text-custom-merah hover:underline"
                >
                  Privacy Policy
                </Link>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p>
            Provided by {developerName} - &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
