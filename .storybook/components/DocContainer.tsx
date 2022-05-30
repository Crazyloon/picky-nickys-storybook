//@ts-nocheck

import React, { FunctionComponent, ReactElement } from "react";
import {
  DocsContainer as BaseContainer,
  DocsContextProps,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { AnyFramework } from "@storybook/csf";

interface BaseContainerProps extends DocsContainerProps<AnyFramework> {
  children?: React.ReactNode;
}

export const DocsContainer: FunctionComponent<BaseContainerProps> = ({
  children,
  context,
}): ReactElement => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themes.dark : themes.light,
              },
            },
          };
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
