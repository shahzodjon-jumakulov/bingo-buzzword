export const useWords = () =>
  useState(() => [
  "Business",
  "Structure",
  "Sole Trader",
  "Partnership",
  "Corporation",
  "Franchise",
  "Ownership",
  "Liability",
  "Profit",
  "Responsibility",
  "Decision",
  "Risk",
  "Capital",
  "Innovation",
  "Growth",
  "Branding",
  "Support",
  "Taxes",
  "Debt",
  "Value",
  "Success",
  "Entity",
  "Legal",
  "Goals",
  "Operation",
  ]);

export const useWinningPatterns = () =>
  useState(() => [
    // Horizontal rows
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // Vertical columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    // Diagonals
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ]);
