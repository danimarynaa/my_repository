export enum ToolCategory {
  PowerTools = "Power Tools",
  HandTools = "Hand Tools",
  GardenTools = "Garden Tools",
  MeasuringTools = "Measuring Tools",
  CuttingTools = "Cutting Tools",
  FasteningTools = "Fastening Tools",
  WoodworkingTools = "Woodworking Tools",
  AutomotiveTools = "Automotive Tools",
  PlumbingTools = "Plumbing Tools",
  ElectricalTools = "Electrical Tools",
  PaintingTools = "Painting Tools",
  SafetyEquipment = "Safety Equipment",
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ToolCategory;
  imageUrl: string;
}

