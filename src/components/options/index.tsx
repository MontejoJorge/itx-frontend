import clsx from 'clsx';
import type { Options as OptionsType } from '../../types';
import styles from './Options.module.scss';

interface Props {
  options: OptionsType;
  selected: Record<string, number | null>;
  onSelect: (selected: Record<string, number | null>) => void;
}

export function Options({ options, selected, onSelect }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent, code: number, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect({ ...selected, [key]: code });
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles.optionGroup}>
        <span className={styles.optionLabel}>Colors</span>
        <div className={styles.optionsList}>
          {options.colors.map((color) => (
            <div
              key={color.code}
              className={clsx(styles.option, {
                [styles.selected]: selected.colors === color.code,
              })}
              onClick={() => onSelect({ ...selected, colors: color.code })}
              onKeyDown={(e) => handleKeyDown(e, color.code, 'colors')}
              tabIndex={0}
            >
              {color.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.optionGroup}>
        <span className={styles.optionLabel}>Storages</span>
        <div className={styles.optionsList}>
          {options.storages.map((storage) => (
            <div
              key={storage.code}
              className={clsx(styles.option, {
                [styles.selected]: selected.storages === storage.code,
              })}
              onClick={() => onSelect({ ...selected, storages: storage.code })}
              onKeyDown={(e) => handleKeyDown(e, storage.code, 'storages')}
              tabIndex={0}
            >
              {storage.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
