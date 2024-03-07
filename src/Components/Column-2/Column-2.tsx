interface ColumnProps {
  children: React.ReactNode;
}
const ColumnTwo: React.FC<ColumnProps> = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 px-[10rem] my-20">{children}</div>
  );
};
export default ColumnTwo;
