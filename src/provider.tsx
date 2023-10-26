"use client";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import { defaultLocale, dynamicActivate } from "./i18n";

export const Provider: React.FC<
  PropsWithChildren<{
    locale: string;
  }>
> = ({ children, locale }) => {
  useEffect(() => {
    dynamicActivate(locale || defaultLocale);
  }, [locale]);
  return (
    <I18nProvider i18n={i18n}>
      <MantineProvider
        theme={{
          fontFamily: "inherit",
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                  xxl: 1564,
                },
              },
            },
          },
        }}
      >
        <main>{children}</main>
      </MantineProvider>
    </I18nProvider>
  );
};
