"use client";

import { useState } from "react";
import styles from "./WelcomeVideo.module.scss";

type WelcomeVideoProps = {
  src: string;
  label: string;
  fallbackInitial: string;
};

export function WelcomeVideo({ src, label, fallbackInitial }: WelcomeVideoProps) {
  const [failed, setFailed] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<string>("9 / 16");

  return (
    <figure className={styles.frame} style={{ aspectRatio }}>
      <span className={styles.ornament} aria-hidden="true" />
      {failed ? (
        <div className={styles.fallback} role="img" aria-label={label}>
          <span className={styles.fallbackMark} aria-hidden="true">
            {fallbackInitial}
          </span>
        </div>
      ) : (
        <video
          className={styles.video}
          src={`${src}#t=0.1`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-label={label}
          onLoadedMetadata={(event) => {
            const { videoWidth, videoHeight } = event.currentTarget;
            if (videoWidth && videoHeight) setAspectRatio(`${videoWidth} / ${videoHeight}`);
          }}
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}
