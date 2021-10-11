import { FC } from 'react';

export const IFrame: FC = (): JSX.Element => {
  const getUrl: string = localStorage.getItem('url_iframe') as string;

  return (
    <iframe
      src={getUrl || "https://hary.fun/form"}
      height="500px"
      frameBorder={0}
      width="100%"
      title="in-pages"
    />
  )
};
