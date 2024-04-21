import connectDB from "@/lib/dbConnect";

export default function Home() {
  connectDB();
  return <div>Hello World</div>;
}
