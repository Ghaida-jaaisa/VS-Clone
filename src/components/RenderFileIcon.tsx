interface IProps {
  filename: string;
}

const RenderFileIcon = ({ filename }: IProps) => {
  const extension = filename.split(".").pop();

  return <div>
    <img src="/icons/react_ts.svg" alt="" />
  </div>;
};

export default RenderFileIcon;
