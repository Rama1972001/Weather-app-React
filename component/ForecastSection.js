import './forecast.css';
import { Accordion, AccordionItemHeading, AccordionItem,  AccordionItemButton } from "react-accessible-accordion";

const Day_hours = ['03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

const ForeCastSection = ({ data }) => {

    const hour = new Date().getHours();
    const forecastHours = Day_hours.slice(hour, Day_hours.length).concat(
        Day_hours.slice(0, hour)
    );

    return (
        <>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, indx) => (
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="hourly-item text-center ">
                                    <div>
                                        <label className="hours">{forecastHours[indx]}</label></div>
                                    <div><img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} /></div>
                                    <label className="min-max">{Math.round(item.main.temp_max)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default ForeCastSection;