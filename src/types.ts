export interface MoodItem {
  id: string;
  name: string;
  emoji: string;
  quote: string;
  message: string;
  colorScheme: {
    name: string;
    buttonBg: string;
    buttonBorder: string;
    buttonHover: string;
    buttonShadow: string;
    badgeColor: string;
    detailBg: string;
    detailBorder: string;
    textColor: string;
    accentColor: string;
    bubbleGradient: string;
    sparkleEmoji: string;
  };
  kidTip: string;
}
