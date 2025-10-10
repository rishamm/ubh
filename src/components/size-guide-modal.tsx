'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { UserCheck, Ruler } from 'lucide-react';

export default function SizeGuideModal() {
  const [gender, setGender] = useState<'female' | 'male' | 'child'>('female');
  const [height, setHeight] = useState([165]);
  const [weight, setWeight] = useState([60]);
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const handleGetRecommendation = () => {
    let size = 'M';
    if (gender === 'male') {
      if (height[0] > 180 && weight[0] > 80) size = 'L';
      else if (height[0] < 170 && weight[0] < 70) size = 'S';
      else size = 'M';
    } else if (gender === 'female') {
      if (height[0] > 170 && weight[0] > 65) size = 'L';
      else if (height[0] < 160 && weight[0] < 55) size = 'S';
      else size = 'M';
    } else {
      // child
      if (height[0] > 140) size = 'L (Child)';
      else if (height[0] < 120) size = 'S (Child)';
      else size = 'M (Child)';
    }
    setRecommendedSize(size);
  };

  return (
    <Dialog onOpenChange={() => setRecommendedSize(null)}>
      <DialogTrigger asChild>
        <Button variant="outline">
            <Ruler className="mr-2 h-4 w-4" />
            Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Find Your Perfect Fit</DialogTitle>
          <DialogDescription>Enter your measurements to get a size recommendation.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-3">
            <Label>Who is this for?</Label>
            <RadioGroup
              defaultValue="female"
              onValueChange={(v: 'male' | 'female' | 'child') => setGender(v)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Woman</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Man</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="child" id="child" />
                <Label htmlFor="child">Child</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="height">Height: {height[0]} cm</Label>
            <Slider id="height" min={100} max={220} step={1} defaultValue={height} onValueChange={setHeight} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="weight">Weight: {weight[0]} kg</Label>
            <Slider id="weight" min={20} max={150} step={1} defaultValue={weight} onValueChange={setWeight} />
          </div>
          {recommendedSize && (
            <Alert className="bg-primary/20">
              <UserCheck className="h-4 w-4" />
              <AlertTitle>We Recommend Size: {recommendedSize}</AlertTitle>
              <AlertDescription>
                This is an estimate. Please check individual product size charts for the best fit.
              </AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleGetRecommendation}>Get Recommendation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
