import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { graphql } from "gql.tada";
import { Fragment } from "react";
import PageHeader from "~/components/PageHeader";
import { graphqlClient } from "~/graphql/client.server";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "~/components/ui/time-line";
import { ArrowDownIcon } from "lucide-react";
import { Card, CardDescription, CardHeader } from "~/components/ui/card";

export const loader = async () => {
  const listLevelsQuery = graphql(`
    query ListLevels {
      findManyLevelCategory {
        id
        name
        description
        machineName
      }
    }
  `);
  const { data } = await graphqlClient.query(listLevelsQuery, {});

  return json({ levelCategories: data?.findManyLevelCategory || [] });
};

export default function Index() {
  const { levelCategories } = useLoaderData<typeof loader>();
  return (
    <Fragment>
      <PageHeader title="Levels" description="List of levels in the system." />
      <section className="flex gap-4">
        {/* <div>
          <LevelsListing levels={levelCategories} />
        </div> */}
        <Timeline>
          {levelCategories.map((levelCategory) => (
            <TimelineItem key={levelCategory.id}>
              <TimelineHeading className="text-2xl pb-2 font-semibold leading-none tracking-tight">
                {levelCategory.name}
              </TimelineHeading>
              <TimelineDot status="custom" customIcon={<ArrowDownIcon />} />
              <TimelineContent>
                <Card>
                  <CardHeader>
                    <CardDescription>
                      {levelCategory.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </TimelineContent>
              <TimelineLine />
            </TimelineItem>
          ))}
        </Timeline>

        {/* <pre>{JSON.stringify(levelCategories, null, 2)}</pre> */}
      </section>
    </Fragment>
  );
}
