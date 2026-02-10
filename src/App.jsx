// import "./App.css";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// function App() {
//   let [task, setTask] = useState("");
//   const handleInput = (e) => {
//     setTask(e.target.value);
//   };

//   const handleBtn = () => {
//     if (!task) {
//       toast.error("Please write your name.");
//     }
//   };
//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="bg-gray-900 py-10">
//         <Card className="w-full max-w-sm mx-auto text-white">
//           <CardHeader>
//             <CardTitle>Add Task</CardTitle>
//             <CardAction></CardAction>
//           </CardHeader>
//           <CardContent>
//             <form>
//               <div className="flex flex-col gap-6">
//                 <div className="grid gap-4">
//                   <Label htmlFor="email">Task Name</Label>
//                   <Input
//                     id="task"
//                     onChange={handleInput}
//                     type="text"
//                     placeholder="Task Name"
//                   />
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="flex-col gap-2">
//             <Button
//               variant="outline"
//               onClick={handleBtn}
//               className={"bg-white text-black"}
//             >
//               Add Task
//             </Button>
//           </CardFooter>
//         </Card>
//         {/* Table part  */}
//         <div className="border-t border-white mt-6"> </div>
//         <Table className={"text-white w-full max-w-sm mx-auto mt-10"}>
//           <TableCaption>A list of your recent task.</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[100px]">SR</TableHead>
//               <TableHead>Task Name</TableHead>
//               <TableHead>Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             <TableRow>
//               <TableCell className="font-medium">01</TableCell>
//               <TableCell>Jaber</TableCell>
//               <TableCell className={"flex gap-x-2"}>
//                 <Button variant="outline" className={"bg-white text-black"}>
//                   Edit
//                 </Button>
//                 <Button variant="outline" className={"bg-white text-black"}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//           <TableFooter>
//             <TableRow></TableRow>
//           </TableFooter>
//         </Table>
//       </div>
//     </>
//   );
// }

// export default App;
