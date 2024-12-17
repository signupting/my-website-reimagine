export interface BenefitProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

export interface ToastMessage {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}