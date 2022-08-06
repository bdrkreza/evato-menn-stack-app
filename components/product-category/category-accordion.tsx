import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export default function CategoryAccordion() {
  return (
    <div className="mb-2 filter-group">
      <Accordion disableGutters TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <div className="items">
            <div className="form-check px-3 mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                In Stock
              </label>
            </div>
            <div className="form-check px-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Pre Order
              </label>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
