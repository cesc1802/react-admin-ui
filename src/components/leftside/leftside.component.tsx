import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// @ts-ignore
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '600',
  },
  heading__item: {
    fontSize: theme.typography.pxToRem(15),
    userSelect: 'none',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

type LeftSideItemProps = {
  path: string;
  text: string;
};

const LeftSideItem = ({ path, text }: LeftSideItemProps) => {
  const classes = useStyles();
  return (
    <>
      <Link to={`${path}`}>
        <AccordionDetails className={classes.heading__item}>
          {text}
        </AccordionDetails>
      </Link>
    </>
  );
};

type Props = {
  text: string;
  path: string;
  routes: any;
};

export default function LeftSideComponent({ text, path, routes }: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    // @ts-ignore
    setExpanded(isExpanded ? panel : false);
  };

  if (routes.length > 0) {
    return (
      <div className={classes.root}>
        <Accordion expanded={true} onChange={handleChange(text)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${path}-content`}
            id={path}
          >
            <Link to={`${path}`} className={classes.heading}>
              {text}
            </Link>
          </AccordionSummary>
          {routes.map((route: any, index: number) => {
            return (
              <LeftSideItem
                key={index}
                path={route.path}
                text={route.meta.text}
              />
            );
          })}
        </Accordion>
      </div>
    );
  } else {
    return (
      <Accordion expanded={false}>
        <AccordionSummary aria-controls={`${path}-content`} id={path}>
          <Link to={`${path}`} className={classes.heading}>
            {text}
          </Link>
        </AccordionSummary>
      </Accordion>
    );
  }
}
