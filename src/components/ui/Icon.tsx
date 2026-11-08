import {
  ArrowDownLeft,
  ArrowLeft,
  Boxes,
  BriefcaseBusiness,
  Camera,
  Check,
  Clock3,
  Lightbulb,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Send,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons = {
  "arrow-left": ArrowLeft,
  "arrow-down-left": ArrowDownLeft,
  chart: TrendingUp,
  design: Boxes,
  check: Check,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  clock: Clock3,
  idea: Lightbulb,
  product: PackageCheck,
  workflow: Workflow,
  send: Send,
  instagram: Camera,
  linkedin: BriefcaseBusiness,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ name, size = 20, strokeWidth = 1.8 }: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      aria-hidden="true"
      focusable="false"
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
