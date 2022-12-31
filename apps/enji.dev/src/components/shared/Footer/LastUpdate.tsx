import clsx from 'clsx';
import { m } from 'framer-motion';

import useLastUpdate from '@/hooks/useLastUpdate';

import dayjs from '@/utils/dayjs';

function LastUpdate() {
  const { data, isError } = useLastUpdate();

  return data ? (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!isError ? (
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className={clsx('hover:underline')}
        >
          <span className={clsx('hidden', 'sm:inline')}>this site was </span>
          <span>updated {dayjs(data.date).fromNow()}</span>
        </a>
      ) : (
        <a
          href="https://github.com/enjidev/enji.dev"
          target="_blank"
          rel="noreferrer"
          className={clsx('hover:underline')}
        >
          <span>see the recent update on GitHub</span>
        </a>
      )}
    </m.div>
  ) : (
    <span>&nbsp;</span>
  );
}

export default LastUpdate;