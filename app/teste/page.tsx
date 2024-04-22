import Post from "../components/post/post";
import Sidebar from "../components/sidebar/sidebar";
import Dashboard from "../(admin-routes)/admin/page";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />

      {/* <div className="p-4 bg-zinc-800 sm:ml-64 h-full flex flex-col justify-between">
        <Post />
        <div className="h-20 bg-sky-400"></div>
        <div className="h-40 bg-neutral-400"></div>
        <div className="h-20 bg-red-400"></div>
      </div> */}
      {/* <Dashboard /> */}
    </>
  );
}
