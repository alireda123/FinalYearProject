'use client'
import { CardDefaultProps } from "@/Types/allTypes";
import { Card, CardHeader, CardBody, Typography, CardFooter } from "@material-tailwind/react";

export function HomepageListing({ name, explanation, image}: CardDefaultProps){
    return(
      <Card className="mt-6 w-96" placeholder={'none'}>
        <CardHeader color="blue-gray" className="relative h-56" placeholder={'none'}>
          <img
            src={image}
            alt="card-image"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center" placeholder={'none'}>
          <Typography variant="h3" color="blue-gray" className="mb-2" placeholder={'none'}>
            {name}
          </Typography>
          <Typography className="text-xl" placeholder={'none'}>
            {explanation}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0" children={''} placeholder={''}></CardFooter>
      </Card>
    );
  }