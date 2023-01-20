import clsx from 'clsx';

import { KeyboardIcon } from '@/components/Icons';
import Kbd from '@/components/Kbd';

const shortcuts: Array<{
  title: string;
  keys: Array<string>;
}> = [
  {
    title: 'Open Quick Access',
    keys: ['Q'],
  },
  {
    title: 'Close Quick Access',
    keys: ['Q', 'Esc'],
  },
  {
    title: 'Toggle Dark Mode',
    keys: ['D'],
  },
  {
    title: 'Toggle Focus',
    keys: ['F'],
  },
];

function TipShortcuts() {
  return (
    <div className={clsx('')}>
      <div className={clsx('mb-4 flex items-center gap-4 text-xl font-bold')}>
        <KeyboardIcon className={clsx('h-8 w-8')} />
        TIP: Shortcuts
      </div>
      <p className={clsx('mb-4 text-sm text-slate-700', 'dark:text-slate-400')}>
        Navigate the site with ease using keyboard shortcuts.
      </p>
      <div className={clsx('flex flex-col text-[13px]')}>
        {shortcuts.map(({ title, keys }) => (
          <div
            className={clsx(
              'flex items-center justify-between border-b border-slate-300 py-2',
              'dark:border-divider-dark'
            )}
          >
            <div className={clsx('text-slate-700', 'dark:text-slate-400')}>
              {title}
            </div>
            <div className={clsx('flex items-center gap-2 text-[12px]')}>
              {keys.map((key, i) => (
                <>
                  <Kbd>{key}</Kbd>
                  {i !== keys.length - 1 && <span>or</span>}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TipShortcuts;