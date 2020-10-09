import React from 'react';
import {Link} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: '600'

    },
    heading__item: {
        fontSize: theme.typography.pxToRem(15),
        userSelect: 'none'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const LeftSideItem = ({path, text}) => {
    const classes = useStyles()
    return (
        <>
            <Link to={`${path}`}>
                <AccordionDetails className={classes.heading__item}>
                    {text}
                </AccordionDetails>
            </Link>
        </>
    )
}

export default function LeftSideComponent({text, path, routes}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    if (routes.length > 0) {
        return (
            <div className={classes.root}>
                <Accordion expanded={expanded === text} onChange={handleChange(text)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={`${path}-content`}
                        id={path}
                    >
                        <Link to={`${path}`} className={classes.heading}>{text}</Link>
                    </AccordionSummary>
                    {routes.map((route, index) => {
                        return (
                            <LeftSideItem key={index} path={route.path} text={route.meta.text}/>
                        )
                    })}
                </Accordion>
            </div>
        )
    } else {
        return (
            <Accordion expanded={false}>
                <AccordionSummary
                    aria-controls={`${path}-content`}
                    id={path}
                >
                    <Link to={`${path}`} className={classes.heading}>{text}</Link>
                </AccordionSummary>
            </Accordion>
        )
    }
}
