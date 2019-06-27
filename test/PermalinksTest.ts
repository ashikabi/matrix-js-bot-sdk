import * as expect from "expect";
import { Permalinks } from "../src";

// @ts-ignore
describe('Permalinks', () => {
    // @ts-ignore
    describe('forRoom', () => {
        // @ts-ignore
        it('should generate a URL for a room ID', () => {
            const roomId = "!test:example.org";
            const expected = `https://matrix.to/#/${roomId}`;
            expect(Permalinks.forRoom(roomId)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for a room alias', () => {
            const roomAlias = "#test:example.org";
            const expected = `https://matrix.to/#/${roomAlias}`;
            expect(Permalinks.forRoom(roomAlias)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for a room ID with via', () => {
            const roomId = "!test:example.org";
            const via = ['one.example.org', 'two.example.org'];
            const expected = `https://matrix.to/#/${roomId}?via=${via.join("via=")}`;
            expect(Permalinks.forRoom(roomId, via)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for a room alias with via', () => {
            const roomAlias = "#test:example.org";
            const via = ['one.example.org', 'two.example.org'];
            const expected = `https://matrix.to/#/${roomAlias}?via=${via.join("via=")}`;
            expect(Permalinks.forRoom(roomAlias, via)).toBe(expected);
        });
    });

    // @ts-ignore
    describe('forEvent', () => {
        // @ts-ignore
        it('should generate a URL for an event ID with room ID', () => {
            const roomId = "!test:example.org";
            const eventId = "$test:example.org";
            const expected = `https://matrix.to/#/${roomId}/${eventId}`;
            expect(Permalinks.forEvent(roomId, eventId)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for an event ID with room alias', () => {
            const roomAlias = "#test:example.org";
            const eventId = "$test:example.org";
            const expected = `https://matrix.to/#/${roomAlias}/${eventId}`;
            expect(Permalinks.forEvent(roomAlias, eventId)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for an event ID with room ID with via', () => {
            const roomId = "!test:example.org";
            const eventId = "$test:example.org";
            const via = ['one.example.org', 'two.example.org'];
            const expected = `https://matrix.to/#/${roomId}/${eventId}?via=${via.join("via=")}`;
            expect(Permalinks.forEvent(roomId, eventId, via)).toBe(expected);
        });

        // @ts-ignore
        it('should generate a URL for an event ID with room alias with via', () => {
            const roomAlias = "#test:example.org";
            const eventId = "$test:example.org";
            const via = ['one.example.org', 'two.example.org'];
            const expected = `https://matrix.to/#/${roomAlias}/${eventId}?via=${via.join("via=")}`;
            expect(Permalinks.forEvent(roomAlias, eventId, via)).toBe(expected);
        });
    });

    // @ts-ignore
    describe('forUser', () => {
        // @ts-ignore
        it('should generate a URL for a user ID', () => {
            const userId = "@test:example.org";
            const expected = `https://matrix.to/#/${userId}`;
            expect(Permalinks.forUser(userId)).toBe(expected);
        });
    });
});