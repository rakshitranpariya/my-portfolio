import React from "react";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatMonthYear = (m, y) => {
  if (m === "~" || y === "~" || m == null || y == null) return "Present";
  const mm = Number(m);
  if (!mm || mm < 1 || mm > 12) return `${y}`;
  return `${monthNames[mm - 1]} ${y}`;
};
function CertificationComponent({ data }) {
  const {
    Title = "NA",
    InstitutionName = "NA",
    FromMonth = "NA",
    FromYear = "NA",
    ToMonth = "NA",
    ToYear = "NA",
    Link = "NA",
  } = data || {};
  const fromDisplay =
    FromMonth === "NA" || FromYear === "NA"
      ? "NA"
      : formatMonthYear(FromMonth, FromYear);

  const toDisplay =
    ToMonth === "NA" || ToYear === "NA"
      ? "NA"
      : formatMonthYear(ToMonth, ToYear);
  const hasLink = Link && Link !== "NA";

  return (
    <div className="col-span-full">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          {/* Left icon box */}
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-blue-50">
            {/* badge icon */}
            <svg
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9.5 12l1.8 1.8L14.8 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="m-0 text-lg font-semibold text-gray-900">{Title}</h3>
            <div className="mt-0 text-base font-semibold text-blue-700 text-left">
              {InstitutionName}
            </div>
            <div className="mt-0 text-sm text-gray-600 text-left">
              Valid: {fromDisplay} - {toDisplay}
            </div>
          </div>
        </div>

        {/* Right action */}
        <div className="flex flex-none items-center">
          {hasLink ? (
            <a
              href={Link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              View Certificate
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 3h7v7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default CertificationComponent;
