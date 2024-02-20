import { ComponentProps, FC, useState } from "react";
import { Fade } from "transitions-kit";

// Componente che riceve dal padre AsyncImage
// inView. È una props di intersection-observer-API
// che torna true se l'elemento è visibile a schermo
// false se non lo è.
// In base a inView si setta lo stato a loading o
// error.
type ImageProps = {
  inView?: boolean;
  smallSrc?: string;
} & ComponentProps<"img">;

const Image: FC<ImageProps> = ({
  inView = true,
  smallSrc = "",
  ...imageProps
}) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      <Fade appear={false} in={status === "loading"} unmountOnExit>
        {/* <div>loading...</div> */}
        <img src={smallSrc} alt="" className="blur-lg" />
      </Fade>

      {inView && (
        <Fade in={status === "loaded"}>
          <img
            {...imageProps}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
          />
        </Fade>
      )}
      <Fade in={status === "failed"} mountOnEnter unmountOnExit>
        <div>error</div>
      </Fade>
    </>
  );
};

export default Image;
