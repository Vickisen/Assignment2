import chalk from 'chalk';
import fs from 'fs';
import { format, formatDistanceToNow, isBefore, parse } from "date-fns";

const first = 'Vickis';
const last = 'Fluffis';
const name = `${chalk.bgBlue(first)} ${chalk.bgBlue(last)}`;

console.log(name);

const compareDates = (argDate) => {

    const currentDate = Date.now();
    return isBefore(argDate, currentDate)
   
    ? `The date ${format(argDate, 'MM/dd/yyyy')} is before the current date ${format(currentDate, 'MM/dd/yyyy')}.`:
      `The date ${format(argDate, 'MM/dd/yyyy')} is after or equal the current date ${format(currentDate, 'MM/dd/yyyy')}.`
}

const currentDate = () => {
    const now = new Date();
    return `Today's current date & time ${format(now, 'MM/dd/yyyy hh:mm:ss a')}.`;
}

const courseStart = new Date("2023-01-31");
const courseStartDate = () => {
    const distance = formatDistanceToNow(courseStart, new Date());
    return `I started this course ${format(courseStart, 'MM/dd/yyyy')} (${distance} ago).`;
}

const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Data written successfully to ${filename}.`);
    });
}

const createMDFile = (argDate = new Date()) => {
    const currentDate = new Date();
    const content = `# Today's current date & time:\n\n${format(currentDate, 'MM/dd/yyyy hh:mm:ss a')}\n\n# Time since this course Javascript-ramverk started:\n\n${formatDistanceToNow(courseStart, currentDate)} ago\n\n# Is the date 02/12/2023 before or after the date when you run my file?\n\n${compareDates(argDate)}`;
    fs.writeFileSync('index.md', content);
};

const createHTMLFile = () => {
    const content = `
      <html>
        <head>
          <title>Current date & time</title>
          <style>
            h1 {
              text-align: center;
              margin-top: 50px;
            }
          </style>
        </head>
        <body>
          <h1>${format(new Date(), 'MM/dd/yyyy hh:mm:ss a')}</h1>
        </body>
      </html>
    `;
    fs.writeFileSync('index.html', content);
};

const main = (argDate) => {
  console.log(currentDate());
  console.log(courseStartDate());
  writeToFile('date.txt', currentDate());
  console.log(compareDates(argDate));
  createHTMLFile();
  createMDFile(argDate);
  };
  
  let date;
  
  if (process.argv.includes("--date")) {
  const index = process.argv.indexOf("--date") + 1;
  date = new Date(process.argv[index]);
  } else {
  date = new Date();
  }
  
  main(date);