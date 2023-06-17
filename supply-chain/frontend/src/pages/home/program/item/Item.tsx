import { Button } from '@gear-js/ui';
import { HexString } from '@polkadot/util/types';
import styles from './Item.module.scss';

type Props = {
  id: string;
  data: {
    name: string;
    description: string;
    state: string;
    by: string;
    producer: HexString;
    distributor: HexString;
    retailer: HexString;
  };
  onBackClick: () => void;
};

function Item({ id, data, onBackClick }: Props) {
  const { state, by, name, description, producer, distributor, retailer } = data;

  return (
    <div>
      <header className={styles.header}>
        <h3 className={styles.heading}>Item info</h3>
        <Button text="Back" color="secondary" size="small" onClick={onBackClick} />
      </header>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.key}>Item ID</span>
          <span className={styles.value}>{id}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.key}>State</span>
          <span className={styles.value}>{state}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.key}>By</span>
          <span className={styles.value}>{by}</span>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.key}>Name</span>
          <span className={styles.value}>{name}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.key}>Description</span>
          <span className={styles.value}>{description}</span>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.key}>Producer</span>
          <span className={styles.value}>{producer}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.key}>Distributor</span>
          <span className={styles.value}>{distributor}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.key}>Retailer</span>
          <span className={styles.value}>{retailer}</span>
        </li>
      </ul>
    </div>
  );
}

export { Item };
