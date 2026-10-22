export default function Badge({ children }) {
  return (
<span className="inline-block rounded-full bg-blue-100 px-7 p-px-10 p-py-10 py-4 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
      {children}
</span>
  );
}