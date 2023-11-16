
export const MetaTags = ({ title, desc }) => {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={desc} />

      <meta property="og:image" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content="https://mentormeintech.com/" />
      <meta property="og:site_name" content="Altos" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mentormeintech" />
      <meta name="twitter:creator" content="@mentormeintech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content="" />
    </head>
  );
};
