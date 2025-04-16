import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description: string;
  image?: string | null;
  showCanonical?: boolean;
  canonicalUrl?: string;
  keywords?: string;
};

export const AppHead: React.FC<React.PropsWithChildren<Props>> = ({
  description,
  title,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {children}
    </Head>
  );
};
