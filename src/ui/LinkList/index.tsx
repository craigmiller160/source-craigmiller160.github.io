import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { List } from 'antd';
import classNames from 'classnames';
import classes from './LinkList.module.scss';
import { castDraft } from 'immer';

export type LinkListItem = Readonly<{
  label: string;
  link: string;
  icon?: ReactNode;
}>;

type Props = Readonly<{
  listClassName?: string;
  listItemClassName?: string;
  items: ReadonlyArray<LinkListItem>;
}>;

const useExtendedNavigate = (): ((p: string) => void) => {
  const navigate = useNavigate();
  return (path) => {
    if (/^https?/.test(path)) {
      window.open(path, '_blank');
      return;
    }
    navigate(path);
  };
};

export const LinkList = (props: Props) => {
  const navigate = useExtendedNavigate();
  return (
    <List
      className={classNames(classes.linkList, props.listClassName)}
      dataSource={castDraft(props.items)}
      renderItem={(item) => (
        <List.Item
          className={classNames(classes.listItem, props.listItemClassName)}
          onClick={() => navigate(item.link)}
        >
          <List.Item.Meta avatar={item.icon} title={item.label} />
        </List.Item>
      )}
    />
  );
};
