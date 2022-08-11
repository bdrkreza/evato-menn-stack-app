import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, Divider, FormControlLabel, FormGroup } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export default function CategoryAccordion() {
  return (
    <div className="mb-2 filter-group">
      {panel1.map(({ panel, title, children }) => (
        <Accordion
          disableGutters
          defaultExpanded
          key={panel}
          TransitionProps={{ unmountOnExit: true }}
          sx={{ mt: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <div className="items">
              {children?.map(({ name }, index) => (
                <FormGroup key={index}>
                  <FormControlLabel
                    sx={{
                      maxHeight: "35px",
                      "&:hover": {
                        borderRadius: "1px",
                        backgroundColor: "var(--light)",
                      },
                    }}
                    control={<Checkbox />}
                    label={name}
                  />
                </FormGroup>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const panel1 = [
  {
    panel: "panel1",
    title: "Availability",
    children: [
      {
        name: "In Stock",
      },
      {
        name: "Pre Order",
      },
      {
        name: "Up Coming",
      },
    ],
  },
  {
    panel: "panel2",
    title: "Generation",
    children: [
      {
        name: "Up to 5th Gen",
      },
      {
        name: "6th Gen",
      },
      {
        name: "7th Gen",
      },
      {
        name: "8th Gen",
      },
    ],
  },
  {
    panel: "panel3",
    title: "Processor",
    children: [
      {
        name: "i3",
      },
      {
        name: "i5",
      },
      {
        name: "i7",
      },
      {
        name: "i6",
      },
      {
        name: "i9",
      },
    ],
  },
  {
    panel: "panel4",
    title: "HDD",
    children: [
      {
        name: "Up to 500GB",
      },
      {
        name: "1TB",
      },
      {
        name: "2TB",
      },
      {
        name: "3TB",
      },
    ],
  },
  {
    panel: "panel5",
    title: "SSD",
  },
];
