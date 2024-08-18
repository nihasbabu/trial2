// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aJURZMQsyePAR8LaJ4sD2e
// Component: 8I8UgVxtCysv

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsvZfHzNhIraI } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: V_ZFHzNHIraI/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: aJURZMQsyePAR8LaJ4sD2e/projectcss
import sty from "./PlasmicDetailAbout.module.css"; // plasmic-import: 8I8UgVxtCysv/css

createPlasmicElementProxy;

export type PlasmicDetailAbout__VariantMembers = {};
export type PlasmicDetailAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicDetailAbout__VariantsArgs;
export const PlasmicDetailAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicDetailAbout__ArgsType = {};
type ArgPropType = keyof PlasmicDetailAbout__ArgsType;
export const PlasmicDetailAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicDetailAbout__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h5?: Flex__<"h5">;
  text?: Flex__<"div">;
};

export interface DefaultDetailAboutProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDetailAbout__RenderFunc(props: {
  variants: PlasmicDetailAbout__VariantsArgs;
  args: PlasmicDetailAbout__ArgsType;
  overrides: PlasmicDetailAbout__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvZfHzNhIraI()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__dsWSi)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                fullWidth: 48,
                fullHeight: 48,
                aspectRatio: undefined
              }}
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__xPfoz)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Lorem ipsum sit amet"
                : "Lorem ipsum sit amet"}
            </h5>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "columns", "img", "h5", "text"],
  freeBox: ["freeBox", "columns", "img", "h5", "text"],
  columns: ["columns", "img", "h5", "text"],
  img: ["img"],
  h5: ["h5"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  columns: "div";
  img: typeof PlasmicImg__;
  h5: "h5";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDetailAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDetailAbout__VariantsArgs;
    args?: PlasmicDetailAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDetailAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDetailAbout__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDetailAbout__ArgProps,
          internalVariantPropNames: PlasmicDetailAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDetailAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDetailAbout";
  } else {
    func.displayName = `PlasmicDetailAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicDetailAbout = Object.assign(
  // Top-level PlasmicDetailAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDetailAbout
    internalVariantProps: PlasmicDetailAbout__VariantProps,
    internalArgProps: PlasmicDetailAbout__ArgProps
  }
);

export default PlasmicDetailAbout;
/* prettier-ignore-end */
