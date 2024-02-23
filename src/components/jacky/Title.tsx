export default function Title(props: any) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "orangered",
          borderBottom: "5px solid teal",
          textAlign: "center",
        }}
      >
        {props.mainTitle}
        {/* {props.subTitle} */}
      </h1>
    </div>
  );
}
