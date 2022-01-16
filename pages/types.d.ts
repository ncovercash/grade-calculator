export enum ScoreCalculationTypes {
  AVERAGE = 0,
  DROPS = 1,
  REPLACES = 2,
  POINTS = 3,
}

export type ScoreCalculation = {
  id: string;
  label: string;
  weight: number;
  type: ScoreCalculationTypes;
  numDrops: number;
  totalPoints: number;
};

export type Grade = {
  id: string;
  label: string;
  known: boolean;
  points: number;
  maxPoints: number;
  minPossiblePoints: number;
  maxPossiblePoints: number;
};

export type Course = {
  id: string;
  label: string;
  totalWeight: number;
  classifications: Record<string, ScoreCalculation>;
  grades: Grade[];
};

export type PageProps = {
  courses: Record<string, Course>;
  onCourseChange: (StoreData) => void;
};
