import React from 'react';
import { FlattenNode, Key, DataEntity, EventDataNode, DataNode, SetKeys } from './interface';
import { convertNodePropsToEventData, getTreeNodeProps } from './utils/treeUtil';

interface SelectedListProps {
  checkedKeys: Key[];
  halfCheckedKeys: Key[];
  headerRender?: (
    checkedKeys: Key[],
    halfCheckedKeys: Key[],
    checkedNodes: FlattenNode[],
    setCheckedKeys: SetKeys,
  ) => React.ReactNode;
  footerRender?: (
    checkedKeys: Key[],
    halfCheckedKeys: Key[],
    checkedNodes: FlattenNode[],
    setCheckedKeys: SetKeys,
  ) => React.ReactNode;
  listItemRender?: (item: Key, node: EventDataNode) => React.ReactNode;
  setCheckedKeys: SetKeys;
  prefixCls: string;
  flattenNodes: FlattenNode[];
  onNodeCheck: (
    e: React.MouseEvent<HTMLSpanElement>,
    treeNode: EventDataNode,
    checked: boolean,
  ) => void;
  treeNodeRequiredProps: TreeNodeRequiredProps;
  clearIcon?: React.ReactNode;
}

interface TreeNodeRequiredProps {
  expandedKeys: Key[];
  selectedKeys: Key[];
  loadedKeys: Key[];
  loadingKeys: Key[];
  checkedKeys: Key[];
  halfCheckedKeys: Key[];
  dragOverNodeKey: Key;
  dropPosition: 0 | 1 | -1;
  keyEntities: Record<Key, DataEntity>;
}

const SelectedList: React.FC<SelectedListProps> = (props) => {
  const {
    prefixCls,
    checkedKeys,
    halfCheckedKeys,
    headerRender,
    footerRender,
    listItemRender,
    setCheckedKeys,
    onNodeCheck,
    flattenNodes,
    treeNodeRequiredProps,
    clearIcon,
  } = props;

  const checkedNodes = flattenNodes.filter((node) => checkedKeys.includes(node.key));
  return (
    <div className={`${prefixCls}-selected-wrapper`}>
      <div className={`${prefixCls}-selected-header`}>
        {headerRender?.(checkedKeys, halfCheckedKeys, checkedNodes, setCheckedKeys)}
      </div>
      <div className={`${prefixCls}-selected-list`}>
        {checkedKeys.map((i) => {
          const eventNode = convertNodePropsToEventData({
            ...getTreeNodeProps(i, treeNodeRequiredProps),
            data: flattenNodes.find((node) => node.key === i)?.data || ({} as DataNode),
            active: true,
          });

          return (
            <div className={`${prefixCls}-selected-item`} key={i}>
              <div>{listItemRender?.(i, eventNode) || i}</div>
              <div
                className={`${prefixCls}-selected-clear`}
                onClick={() => {
                  onNodeCheck({} as React.MouseEvent<HTMLSpanElement>, eventNode, false);
                }}
              >
                {clearIcon || 'x'}
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${prefixCls}-selected-footer`}>
        {footerRender?.(checkedKeys, halfCheckedKeys, checkedNodes, setCheckedKeys)}
      </div>
    </div>
  );
};

export default SelectedList;
