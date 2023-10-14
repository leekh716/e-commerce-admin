import prismadb from "@/lib/prismadb";

interface GraphData {
  name: string;
  total: number;
}

export const getGraphRevenue = async () => {
  return [
    { name: "Jan", total: 40000 },
    { name: "Feb", total: 30000 },
    { name: "Mar", total: 20000 },
    { name: "Apr", total: 27800 },
    { name: "May", total: 18900 },
    { name: "Jun", total: 23900 },
    { name: "Jul", total: 34900 },
    { name: "Aug", total: 40000 },
    { name: "Sep", total: 30000 },
    { name: "Oct", total: 20000 },
    { name: "Nov", total: 27800 },
    { name: "Dec", total: 18900 },
  ];
};
