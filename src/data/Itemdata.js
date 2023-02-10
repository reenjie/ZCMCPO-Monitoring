export const UserColumns = [
  { id: "ponum", label: "PO NUMBER", minWidth: 170 },
  {
    id: "supplier",
    label: "SUPPLIER",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "itemdesc",
    label: "ITEM DESCRIPTION",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "category",
    label: "CATEGORY",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "brand",
    label: "BRAND",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "model",
    label: "MODEL",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "unit",
    label: "UNIT",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "podate",
    label: "PO DATE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "emaildate",
    label: "EMAILED DATE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delterm",
    label: "DELIVERY TERM",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "duedate1",
    label: "DUE DATE1",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "duedate",
    label: "DUE DATE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "extend",
    label: "EXTENSION",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delivered",
    label: "DELIVERED DATE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "completed",
    label: "COMPLETED DATE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delay",
    label: "DELAY",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "qtyorder",
    label: "QUANTITY ORDER",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "qtydelivered",
    label: "QUANTITY DELIVERED",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "undelivereditems",
    label: "UNDELIVERED ITEMS",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delstatus",
    label: "DELIVERY STATUS",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
