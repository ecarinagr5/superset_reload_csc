import React, { useMemo } from "react"
import { WrapNavBar, SideNavBar, HeaderNav, LinksNavBar } from "../styles/index";
import { SEVERITY } from "../utils/index"

interface NavCounterProps {
    alarms: any[],
    type: string
}

const NavCounter: React.FC<NavCounterProps> = ({ alarms, type }) => {

    const alarmCounts = useMemo(() => {
        const counterAlarms: any = [];
        alarms?.forEach((alarm) => {
            counterAlarms.push(alarm[1])
        })
        return counterAlarms?.reduce((acc: { [x: string]: any; }, alarm: string | number) => {
            acc[alarm] = (acc[alarm] || 0) + 1;
            return acc;
        }, {});
    }, [alarms])

    const totalAlarms = alarms?.length;
    return (
        <>
            <HeaderNav>{type?.toUpperCase()}</HeaderNav>
            {type === 'alarms' ? <WrapNavBar>
                {

                    Object.keys(alarmCounts).map((key, index) => {
                        const percentage = (Number(alarmCounts[key]) || 0) / totalAlarms * 100;
                        return (
                            <>
                                <SideNavBar key={index} style={{ width: `${percentage}%`, background: SEVERITY[key] }}>
                                    {alarmCounts[key]}
                                </SideNavBar>
                            </>
                        )
                    })
                }
            </WrapNavBar> : <LinksNavBar><SideNavBar>{totalAlarms}</SideNavBar></LinksNavBar>}
        </>
    )
}

export default NavCounter