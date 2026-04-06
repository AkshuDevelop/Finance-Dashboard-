import React from "react";
import Buttons from "./button";
import Profile from "./Profile";

export default function Header({ role, setRole }) {
  return (
    <div
      className="
          h-screen
          w-64

          sticky top-0

          bg-zinc-100
          border-r border-zinc-200

          p-4
          flex flex-col gap-4

          font-manrope
          "
    >
      {/* logo */}
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
          <svg viewBox="0 0 50 50" className="w-4 h-4 text-white fill-current">
            <path d="M43 12h-43v26h50v-26h-7zm5 19.271c-2.328.643-4.086 2.399-4.729 4.729h-36.542c-.644-2.328-2.4-4.086-4.729-4.729v-12.542c2.329-.644 4.085-2.4 4.729-4.729h36.565c.672 2.257 2.449 4.034 4.706 4.706v12.565zm-20.884-4.216c-.23-.14-.116-.269-1.116-.388v2.897l.548-.102c.742-.26 1.114-.745 1.114-1.451 0-.409-.183-.731-.546-.956zm-4.501-4.727c0 .445.203.78.607 1 .155.087.416.184.777.289v-2.741c-.294.069-.552.173-.769.315-.41.272-.615.652-.615 1.137zm2.385-7.328c-4.971 0-9 4.478-9 10 0 5.521 4.029 10 9 10s9-4.479 9-10c0-5.522-4.029-10-9-10zm3.854 15.654c-.679.58-1.854.935-2.854 1.069v1.277h-2v-1.3c-1.044-.142-1.909-.3-2.588-.835-.942-.742-1.412-1.865-1.412-2.865h2.488c.081 0 .239.801.475 1.084.245.291.593.325 1.037.448v-3.405c-1.217-.281-2.065-.584-2.536-.910-.841-.575-1.261-1.476-1.261-2.7 0-1.117.411-2.045 1.234-2.784.628-.565 1.484-.912 2.563-1.046v-1.687h2v1.74c1 .149 1.676.613 2.3 1.076.939.697 1.6 1.184 1.645 3.184h-2.506c-.047-1-.549-1.432-1.172-1.748-.033-.016-.267-.193-.267-.207v3.143l.902.174c.959.226 1.846.528 2.324.905.744.588 1.032 1.437 1.032 2.547.002 1.14-.524 2.086-1.404 2.84z" />
          </svg>
        </div>

        <span className="font-semibold text-zinc-800 text-lg">Finance</span>
      </div>

      {/* search */}
      <div className="flex items-center bg-zinc-200 rounded-xl px-3 py-2 text-zinc-500 text-sm">
        <span className="opacity-70">Search</span>

        <div className="ml-auto text-xs bg-zinc-300 px-2 py-0.5 rounded-md">
          /
        </div>
      </div>

      {/* navigation */}
      <div className="flex flex-col gap-1 mt-2">
        <Buttons
          to="/dashboard"
          value="Dashboard"
          icon="/components/assets/svg/Dashboard.svg"
        />

        <Buttons
          to="/transactions"
          value="Transactions"
          icon="/components/assets/svg/Transaction.svg"
        />

        <Buttons
          to="/insights"
          value="Insights"
          icon="/components/assets/svg/Insights.svg"
        />
      </div>

      {/* profile */}
      <div className="mt-auto">
        <Profile
          ProfileName="Akshat"
          dp="/components/assets/Profile/Pic.png"
          role={role}
          setRole={setRole}
        />
      </div>
    </div>
  );
}
